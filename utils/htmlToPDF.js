import jsPDF from "jspdf"; // 引入插件
import html2canvas from "html2canvas";

const HTMLToCanvas = async (nodeID) => {
  const canvas = await html2canvas(document.querySelector(nodeID));
  return canvas;
};

export const domNodeToPDF = async (nodeID, pdfName) => {
  const canvas = await HTMLToCanvas(nodeID);
  const pageData = canvas.toDataURL("image/jpeg", 1.0);
  const pdf = new jsPDF({
    orientation: "l", // landscape
    unit: "pt", // points, pixels won't work properly
    format: [canvas.width, canvas.height], //
  });
  pdf.addImage(pageData, "JPEG", 0, 0, canvas.width, canvas.height);
  pdf.save(pdfName + ".pdf");
};
