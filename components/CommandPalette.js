import { useState, useMemo, useEffect, Fragment } from "react";
import { Dialog, Combobox, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { SearchIcon } from "@heroicons/react/outline";

const defaultProjects = Array(100)
  .fill(1)
  .map((i) => Math.random() * 1000 + "");

export default function CommandPalette({ projects = defaultProjects }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const filteredItems = useMemo(() => {
    if (!query) return projects;
    return projects.filter((item) =>
      (item + "").toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );
  }, [query, projects]);

  useEffect(() => {
    const onKeydown = (e) => {
      if (e.key === "/" && (e.metaKey || e.ctrlKey)) {
        setTimeout(() => {
          setIsOpen((p) => !p);
        }, 0);
      }
    };
    window.addEventListener("keydown", onKeydown);
    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, []);

  return (
    <Transition.Root
      show={isOpen}
      as={Fragment}
      afterLeave={() => setQuery("")}
    >
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 p-8 pt-[25vh]"
      >
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-300 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-gray-500/75" />
        </Transition.Child>
        <Transition.Child
          enter="duration-300 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-300 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Combobox
            as="div"
            className="overflow-hidden relative mx-auto max-w-xl rounded-xl bg-white shadow-2xl ring-1 ring-black/5 divide-y divide-gray-100"
            onChange={(v) => {
              // 跳转
              console.log("trigger -> ");
              console.log(v);
              setIsOpen(false);
              router.push("/posts/first-post");
            }}
          >
            <div className="flex items-center px-4">
              <SearchIcon className="h-6, w-6 text-gray-500" />
              <Combobox.Input
                className="w-full border-0 bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:ring-0 h-12 pl-5"
                placeholder="Search..."
                onChange={(v) => setQuery(v.target.value)}
              />
            </div>
            {filteredItems.length > 0 && (
              <Combobox.Options className="py-4 text-sm max-h-96 overflow-y-auto">
                {filteredItems.map((project) => (
                  <Combobox.Option key={project} value={project}>
                    {({ active }) => (
                      <div
                        className={`px-4 py-2 space-x-1 ${
                          active ? "bg-indigo-600" : "bg-white"
                        }`}
                      >
                        <span
                          className={`font-medium text-gray-900 ${
                            active ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {project}
                        </span>
                        <span
                          className={`text-gray-400 ${
                            active ? "text-indigo-200" : "text-gray-400"
                          }`}
                        >
                          {project}
                        </span>
                      </div>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
            {query && filteredItems.length === 0 && (
              <p className="p-4 text-sm text-gray-400">Not Found</p>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
}
