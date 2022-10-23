const defaultTemplate = {
  tenant: "PayPal",
  dimension: "internal_user",
  limit: 1000,
  metrics: ["page_views", "records"],
  sort: "page_views",
  time: { chunks: 86400000 },
  tabFilters: [{ predicate: "is not null", value: "", key: "internal_user" }],
  sortedSegment: {
    filters: [
      { predicate: "equal", value: "insightshubnodeweb", key: "component" },
      {
        predicate: "equal",
        key: "page_group",
        value: "intelligenceHub:aiPlatform",
        selected: true,
      },
      {
        predicate: "contains",
        value: "intelligenceHub_aiPlatform_pipeline",
        key: "event_name",
        selected: true,
      },
    ],
    since: "2022-09-01T00:00:00.000Z",
    until: "2022-10-20T23:59:59.999Z",
  },
  comparisonQueries: [
    {
      filters: [
        { predicate: "equal", value: "insightshubnodeweb", key: "component" },
        {
          predicate: "equal",
          key: "page_group",
          value: "intelligenceHub:aiPlatform",
          selected: true,
        },
        {
          predicate: "contains",
          value: "intelligenceHub_aiPlatform_pipeline",
          key: "event_name",
          selected: true,
        },
      ],
      since: "2022-09-01T00:00:00.000Z",
      until: "2022-10-20T23:59:59.999Z",
      comparisonIndex: 0,
      isSortedIndex: true,
    },
  ],
  sortedSegmentIndex: 0,
  timezone: "UTC",
  originalDimension: "internal_user",
  queryId: "test@dev.com",
};

const createTemplate = (queryCondition) => {
  return {
    ...defaultTemplate,
    comparisonQueries: [
			{
				...queryCondition,
				comparisonIndex: 0,
				isSortedIndex: true,
			}
    ],
    sortedSegment: queryCondition,
  };
};

export default createTemplate;
