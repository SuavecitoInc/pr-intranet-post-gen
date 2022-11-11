import DatePicker from "react-datepicker";
import { MdPostAdd, MdRemove, MdAdd } from "react-icons/md";
import { VscDiffRemoved, VscDiffAdded } from "react-icons/vsc";

import "react-datepicker/dist/react-datepicker.css";

function SectionInputForm({
  sections,
  setSections,
}: {
  sections: Section[];
  setSections: any;
}) {
  const handleSectionChange = (sectionIndex: number, e: any) => {
    const name = e.target.name;
    let values = [...sections];
    //@ts-ignore
    values[sectionIndex][name] = e.target.value;
    setSections(values);
  };

  const handleDateChange = (
    sectionIndex: number,
    name: string,
    date: Date | null
  ) => {
    console.log("HANDLE DATE CHANGE " + name, date);
    if (!date) return;

    let values = [...sections];
    //@ts-ignore
    values[sectionIndex].releaseDates[name] = date;
    setSections(values);
  };

  const handleItemChange = (
    sectionIndex: number,
    itemIndex: number,
    e: any
  ) => {
    const name = e.target.name;
    let values = [...sections];
    //@ts-ignore
    values[sectionIndex].items[itemIndex][name] = e.target.value;
    setSections(values);
  };

  const addNewSection = () => {
    const date = new Date();
    const releaseDates = {
      retailOnline: date,
      retailStore: date,
      wholesale: date,
      distributor: date,
      professional: date,
    };
    setSections((prevSections: Section[]) => [
      ...prevSections,
      { name: "", releaseDates, items: [] },
    ]);
  };

  const addNewItem = (sectionIndex: number) => {
    let values = [...sections];
    console.log("values[sectionIndex]", values[sectionIndex]);
    values[sectionIndex].items = [
      ...values[sectionIndex]?.items,
      { image: "", title: "", sku: "" },
    ];
    setSections(values);
  };

  const removeSection = (sectionIndex: number) => {
    let values = [...sections];
    values.splice(sectionIndex, 1);

    setSections(values);
  };

  const removeItem = (sectionIndex: number, itemIndex: number) => {
    let values = [...sections];
    values[sectionIndex].items.splice(itemIndex, 1);
    setSections(values);
  };

  return (
    <section className="striped">
      <h2 className="uppercase dark:text-white mb-3 border-b-zinc-700 text-xl">
        CREATE POST SECTION
      </h2>
      {sections.map((section: any, si: number) => (
        <div
          key={si}
          className="section p-5 rounded-lg bg-zinc-100 dark:bg-zinc-800 my-3"
        >
          <div>
            <label
              className="block text-gray-600 dark:text-gray-400 text-sm font-bold mb-2"
              htmlFor="image"
            >
              Release Name
            </label>
            <input
              className="shadow border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="section-name"
              type="text"
              name="name"
              placeholder="Section Name"
              value={section.name || ""}
              onChange={(e) => handleSectionChange(si, e)}
            />
            <div className="release-dates mb-5">
              <h3 className="uppercase dark:text-white">RELEASE DATES</h3>
              <label
                className="block text-gray-600 dark:text-gray-400 text-sm font-bold my-2"
                htmlFor="release-retail-online"
              >
                Retail Online
              </label>
              <DatePicker
                className="shadow border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                selected={section.releaseDates.retailOnline}
                onChange={(date) => handleDateChange(si, "retailOnline", date)}
                dateFormat="MM-dd-yyyy"
                popperPlacement="bottom"
              />
              <label
                className="block text-gray-600 dark:text-gray-400 text-sm font-bold my-2"
                htmlFor="release-retail-store"
              >
                Retail Store
              </label>
              <DatePicker
                className="shadow border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                selected={section.releaseDates.retailStore}
                onChange={(date) => handleDateChange(si, "retailStore", date)}
                dateFormat="MM-dd-yyyy"
                popperPlacement="bottom"
              />

              <label
                className="block text-gray-600 dark:text-gray-400 text-sm font-bold my-2"
                htmlFor="release=wholesale"
              >
                Wholesale
              </label>
              <DatePicker
                className="shadow border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                selected={section.releaseDates.wholesale}
                onChange={(date) => handleDateChange(si, "wholesale", date)}
                dateFormat="MM-dd-yyyy"
                popperPlacement="bottom"
              />

              <label
                className="block text-gray-600 dark:text-gray-400 text-sm font-bold my-2"
                htmlFor="release-distributor"
              >
                Distributors
              </label>
              <DatePicker
                className="shadow border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                selected={section.releaseDates.distributor}
                onChange={(date) => handleDateChange(si, "distributor", date)}
                dateFormat="MM-dd-yyyy"
                popperPlacement="bottom"
              />

              <label
                className="block text-gray-600 dark:text-gray-400 text-sm font-bold my-2"
                htmlFor="release-professional"
              >
                Professionals
              </label>
              <DatePicker
                className="shadow border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                selected={section.releaseDates.professional}
                onChange={(date) => handleDateChange(si, "professional", date)}
                dateFormat="MM-dd-yyyy"
                popperPlacement="bottom"
              />
            </div>
          </div>

          <div className="items border border-zinc-400 dark:border-zinc-400 rounded-lg p-5 mb-3">
            <h2 className="uppercase dark:text-white mb-3">ITEMS</h2>
            {section.items.map((item: Item, i: number) => (
              <div
                key={i}
                className="shadow border border-zinc-400 dark:border-zinc-400 rounded w-full py-5 px-6 mb-3"
              >
                <label
                  className="block text-gray-600 dark:text-gray-400 text-sm font-bold mb-2"
                  htmlFor="image"
                >
                  Image
                </label>
                <input
                  className="shadow border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="image"
                  type="text"
                  name="image"
                  placeholder="Image Src"
                  value={item.image || ""}
                  onChange={(e) => handleItemChange(si, i, e)}
                />
                <label
                  className="block text-gray-600 dark:text-gray-400 text-sm font-bold mb-2"
                  htmlFor="image"
                >
                  Title
                </label>
                <input
                  className="shadow border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={item.title || ""}
                  onChange={(e) => handleItemChange(si, i, e)}
                />
                <label
                  className="block text-gray-600 dark:text-gray-400 text-sm font-bold mb-2"
                  htmlFor="image"
                >
                  SKU
                </label>
                <input
                  className="shadow border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="sku"
                  type="text"
                  name="sku"
                  placeholder="SKU"
                  value={item.sku || ""}
                  onChange={(e) => handleItemChange(si, i, e)}
                />
                <div className="text-center">
                  <button
                    className="uppercase rounded w-1/3 py-2 px-3 mb-3 bg-zinc-400 text-white dark:text-white dark:bg-zinc-600 dark:hover:bg-zinc-700 cursor-pointer"
                    onClick={() => removeItem(si, i)}
                  >
                    <span className="flex justify-center items-center gap-2">
                      <MdRemove /> Item
                    </span>
                  </button>
                </div>
              </div>
            ))}
            <div className="text-center">
              <button
                className="uppercase rounded w-1/3 py-2 px-3 m-3 bg-zinc-400 text-white dark:text-white dark:bg-zinc-600 dark:hover:bg-zinc-700 cursor-pointer"
                onClick={() => addNewItem(si)}
              >
                <span className="flex justify-center items-center gap-2">
                  <MdAdd /> Item
                </span>
              </button>
            </div>
          </div>
          {sections.length > 1 && (
            <div className="text-center">
              <button
                className="uppercase rounded w-1/3 py-2 px-3 mb-3 bg-zinc-400 text-white dark:text-white dark:bg-zinc-600 dark:hover:bg-zinc-700 cursor-pointer"
                onClick={() => removeSection(si)}
              >
                {" "}
                <span className="flex justify-center items-center gap-2">
                  <MdRemove /> Section
                </span>
              </button>
            </div>
          )}
        </div>
      ))}

      <div className="actions my-10 text-center">
        <button
          className="uppercase rounded w-1/3 mx-auto py-2 px-3 mb-3 bg-zinc-400 text-white dark:text-white dark:bg-zinc-600 dark:hover:bg-zinc-700 cursor-pointer"
          onClick={addNewSection}
        >
          <span className="flex justify-center items-center gap-2">
            <MdAdd /> Add Section
          </span>
        </button>
      </div>
    </section>
  );
}

export default SectionInputForm;
