import { EditOutlined, EyeOutlined, DeleteOutlined } from "@ant-design/icons";

const imageBodyTemplate = (product: any) => {
  return (
    <img
      src={product.img}
      alt={product.image}
      className="w-6rem shadow-2 border-round h-[80px] object-contain	mt-[10px]"
    />
  );
};

const motherLangBodyTemplate = (product: any) => {
  return <p>{product.motherLang}</p>;
};

const yearBodyTemplate = (product: any) => {
  return <p>{product.year}</p>;
};

const authorBodyTemplate = (product: any) => {
  return <p>{product.author}</p>;
};

const strixBodyTemplate = (product: any) => {
  return <p>{product.strix}</p>;
};

const vaznBodyTemplate = (product: any) => {
  return <p>{product.DarslikVazni}</p>;
};
const actionForReferencePage = () => {
  return (
    <>
      <EditOutlined className="text-[24px]" />
      <EyeOutlined
        style={{
          fontSize: "24px",
          marginRight: "10px",
          marginLeft: "10px",
        }}
      />
      <DeleteOutlined className="text-[24px]" />
    </>
  );
};
const actionForReferencePageChild = () => {
  return (
    <>
      <EditOutlined className="text-[24px]" />
      <EyeOutlined
        style={{
          fontSize: "24px",
          marginRight: "10px",
          marginLeft: "10px",
        }}
      />
      <DeleteOutlined className="text-[24px]" />
    </>
  );
};
export {
  imageBodyTemplate,
  motherLangBodyTemplate,
  yearBodyTemplate,
  authorBodyTemplate,
  strixBodyTemplate,
  actionForReferencePage,
  vaznBodyTemplate,
  actionForReferencePageChild,
};
