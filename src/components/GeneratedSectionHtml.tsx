import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/plugins/toolbar/prism-toolbar.min.css";
import "prismjs/plugins/toolbar/prism-toolbar.min";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min";

const formatDate = (date: Date) => {
  const d = new Date(date);

  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
};

const generatePostItem = (item: Item, cols: number) => {
  const { image, title, sku } = item;
  if (image === "" || title === "" || sku === "") {
    return null;
  }
  const code = `
        <div class="col-sm-${cols}">
          <a class="fancy-img" href="${item.image}" rel="product-release" data-fancybox="group" data-caption="${item.title}">
            <img class="aligncenter size-full" src="${item.image}" alt="${item.title}" width="1000" height="800" />
          </a>
          <h3><strong>${item.title}</strong></h3>
          <p><strong>${item.sku}</strong></p>
        </div>
  `;
  return code;
};

const generateSection = (section: any, cols: number) => {
  const { name, releaseDates, items } = section;

  const products =
    items.length > 0
      ? items
          .map((item: Item, i: number) => generatePostItem(item, cols))
          .join("")
      : "";

  const code = `
      <div class="row">
        <div class="col-sm-12 mb-5 mt-5">
          <h3>${name}</h3>
          <ul>
            <li><strong>RETAIL ONLINE:</strong> ${formatDate(
              releaseDates.retailOnline
            )}</li>
            <li><strong>RETAIL STORE:</strong> ${formatDate(
              releaseDates.retailStore
            )}</li>
            <li><strong>WHOLESALE:</strong> ${formatDate(
              releaseDates.wholesale
            )}</li>
            <li><strong>DISTRIBUTORS:</strong> ${formatDate(
              releaseDates.distributor
            )}</li>
            <li><strong>PROFESSIONAL:</strong> ${formatDate(
              releaseDates.professional
            )}</li>
          </ul>
        </div>
        ${products}
      </div>
  `;

  return code;
};

const getNumberOfCols = (num: number) => {
  let col = 2;
  if (num > 4) {
    col = 4;
  } else if (num === 1) {
    col = 2;
  } else {
    col = num;
  }

  return col;
};

function GeneratedSectionHtml({ sections }: { sections: any[] }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [sections]);

  const code = `
    <div class="container-fluid">
      ${sections
        .map((section: any) =>
          generateSection(section, getNumberOfCols(section.items.length))
        )
        .join("")}
    </div>
  `;

  return (
    <section>
      <h2 className="uppercase dark:text-white mb-3">GENERATED HTML</h2>
      {sections.length > 0 ? (
        <pre className="rounded-lg">
          <code className="language-html">{code}</code>
        </pre>
      ) : (
        <p className="text-center text-black dark:text-white text-sm">
          HTML will appear here.
        </p>
      )}
    </section>
  );
}

export default GeneratedSectionHtml;
