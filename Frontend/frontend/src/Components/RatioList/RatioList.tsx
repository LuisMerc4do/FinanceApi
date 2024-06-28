type Props = {
  config: any;
  data: any;
};

const RatioList = ({ config, data }: Props) => {
  const renderedCells = config.map((row: any) => {
    return (
      <div className="flex flex-col border-stroke pr-6 pt-4 pb-2.5 dark:border-strokedark dark:bg-boxdark xl:pb-1">
        <div className="flex items-center pb-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {row.label}
            </p>
            <p className="text-sm text-gray-500 truncate">
              {row.subTitle && row.subTitle}
            </p>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900">
            {row.render(data)}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="ml-4 mt-4 mb-4 p-4 sm:p-6 w-full">
      <ul className="divide-y divide-gray-200">{renderedCells}</ul>
    </div>
  );
};

export default RatioList;
