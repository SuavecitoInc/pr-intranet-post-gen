function Information() {
  return (
    <section className="text-black dark:text-white my-6 border border-zinc-600 dark:border-zinc-400 p-6 rounded-lg">
      <p className="m-3">
        This app will generate the HTML needed to create a new product release
        post. You will also need a <em>Featured Image</em> with the following
        dimensions: <em>1036 x 576</em>.
      </p>
      <p className="m-3">
        In order for <em>Product Release</em> posts to display correctly they
        need to be tagged as <em>featured</em> and the following categories need
        to be selected: <em>Featured, Product Release.</em>
      </p>
    </section>
  );
}

export default Information;
