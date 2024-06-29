type Props = {
  config: any;
  data: any;
};

const RatioList = ({ config, data }: Props) => {
  const renderedCells = config.map((row: any) => {
    return (
      <div className="object-top md:grid-cols-1 ">
        <div className="flex flex-wrap items-center">
          <div className="flex-1 min-w-0">
            <p className=" font-semibold truncate py-3 ">{row.label}</p>
            <p className="">{row.subTitle && row.subTitle}</p>
          </div>
          <div className="inline-flex items-center text-base font-semibold pr-6">
            {row.render(data)}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="ml-4 mt-4 mb-4 p-4 sm:p-6 w-full">
      <ul className="divide-y divide-zinc-100 pr-5">{renderedCells}</ul>
    </div>
  );
};

export default RatioList;
