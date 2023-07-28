const HomapageFeature = ({ plan_list }) => {
  return (
    <div className="key-feature-grid mt-10 flex flex-col gap-12">
      {plan_list.map((plan, i) => {
        return (
          <div
            key={i}
          >
            <h3 className="h4 text-xl lg:text-3xl font-bold relative flex items-center gap-2 mb-4">
              <span className="w-3 h-3 bg-color-1 rounded-full"></span>
              {plan.title}</h3>
            <ul className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-3">
              {plan.list.map((item, i) => ((
                <li className="rounded-lg bg-color-1 text-white p-5 shadow-lg shadow-color-2" key={i}>
                  <h4 className="lg:text-2xl text-white">{item.name}</h4>
                  <span className="lg:text-lg">{item.text}</span>
                  <p className="lg:text-2xl font-bold">{item.description}</p>
                </li>
              )))}
            </ul>
          </div>
        )
      })}
    </div>
  );
};

export default HomapageFeature;
