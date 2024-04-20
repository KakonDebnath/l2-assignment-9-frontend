const Footer = () => {
  return (
    <div className="bg-orange-400 text-white px-10">
      <div className="grid grid-cols-5 gap-4 p-3">
        <div className="flex flex-col gap-3">
          <h2 className="font-semibold underline">Product</h2>
          <div className="text-slate-700 flex flex-col gap-2">
            <p>Baby Clothes</p>
            <p>Baby Toy</p>
            <p>Baby Grocery</p>
            <p>Baby Grocery</p>
          </div>
        </div>
      </div>
      <div className="border-2 border-b border-dashed"></div>
      <p className="text-center py-5">
        &copy; All Right Reserved Kabbo baby shop
      </p>
    </div>
  );
};

export default Footer;
