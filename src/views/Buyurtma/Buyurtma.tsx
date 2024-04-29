import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const OrdersPage = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  const [products] = useState([
    {
      id: 1,
      region: "Toshkent",
      district: "Yunusobod",
      school: "288-maktab",
      class: "5-sinf",
      subject_name: "Ona tili",
      lang: "O'zbek",
      object_type: "Darslik",
      year: "2022 - 2023",
      first_level: "40",
      second_level: "20",
      difference: "20",
      accepted: "",
      percentage: "10",
      dalolatnoma: "1",
      action: "",
    },
    {
      id: 2,
      region: "Toshkent",
      district: "Yunusobod",
      school: "288-maktab",
      class: "5-sinf",
      subject_name: "Ona tili",
      lang: "O'zbek",
      object_type: "Darslik",
      year: "2022 - 2023",
      first_level: "40",
      second_level: "20",
      difference: "20",
      accepted: "",
      percentage: "10",
      dalolatnoma: "1",
      action: "",
    },
    {
      id: 3,
      region: "Toshkent",
      district: "Yunusobod",
      school: "288-maktab",
      class: "5-sinf",
      subject_name: "Ona tili",
      lang: "O'zbek",
      object_type: "Darslik",
      year: "2022 - 2023",
      first_level: "40",
      second_level: "20",
      difference: "20",
      accepted: "",
      percentage: "10",
      dalolatnoma: "1",
      action: "",
    },
    {
      id: 4,
      region: "Toshkent",
      district: "Yunusobod",
      school: "288-maktab",
      class: "5-sinf",
      subject_name: "Ona tili",
      lang: "O'zbek",
      object_type: "Darslik",
      year: "2022 - 2023",
      first_level: "40",
      second_level: "20",
      difference: "20",
      accepted: "",
      percentage: "10",
      dalolatnoma: "1",
      action: "",
    },
    {
      id: 5,
      region: "Toshkent",
      district: "Yunusobod",
      school: "288-maktab",
      class: "5-sinf",
      subject_name: "Ona tili",
      lang: "O'zbek",
      object_type: "Darslik",
      year: "2022 - 2023",
      first_level: "40",
      second_level: "20",
      difference: "20",
      accepted: "",
      percentage: "10",
      dalolatnoma: "1",
      action: "",
    },
  ]);

  const actionsRender = () => {
    return (
      <>
        <div className="">
          <Button label="Rad etish" size="small" severity="danger" />
          <Button
            label="Tasdiqlash"
            size="small"
            severity="success"
            className="mt-2"
          />
        </div>
      </>
    );
  };

  return (
    <section className="w-full">
      <div className="flex px-2">
        <h3 className="text-3xl">
          Darsliklarga buyurtma berish va qabul qilish
        </h3>
      </div>
      <Card>
        <div className="flex flex-wrap">
          <div className="w-1/4 px-2 mt-4">
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              placeholder="Viloyat"
              className="w-full"
            />
          </div>
          <div className="w-1/4 px-2 mt-4">
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              placeholder="Tuman / Shahar"
              className="w-full"
            />
          </div>
          <div className="w-1/4 px-2 mt-4">
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              placeholder="Maktab"
              className="w-full"
            />
          </div>
          <div className="w-1/4 px-2 mt-4">
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              placeholder="O'quv yili"
              className="w-full"
            />
          </div>
          <div className="w-1/4 px-2 mt-4">
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              placeholder="Sinflar"
              className="w-full"
            />
          </div>
          <div className="w-1/4 px-2 mt-4">
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              placeholder="Fanlar"
              className="w-full"
            />
          </div>
          <div className="w-1/4 px-2 mt-4">
            <Dropdown
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.value)}
              options={cities}
              optionLabel="name"
              placeholder="Ta'lim tili"
              className="w-full"
            />
          </div>
        </div>
      </Card>

      <Card>
        <DataTable
          value={products}
          showGridlines
          tableStyle={{ minWidth: "50rem" }}
          scrollable
        >
          <Column field="id" header="ID"></Column>
          <Column field="region" header="Viloyat"></Column>
          <Column field="district" header="Tuman/Shahar"></Column>
          <Column field="school" header="Maktab"></Column>
          <Column field="class" header="Sinf"></Column>
          <Column field="subject_name" header="Fan Nomi"></Column>
          <Column field="lang" header="Ta'lim tili"></Column>
          <Column field="object_type" header="Majmua turi"></Column>
          <Column field="year" header="O'quv yili"></Column>
          <Column field="first_level" header="1-bosqich soni"></Column>
          <Column field="second_level" header="2-bosqich soni"></Column>
          <Column field="difference" header="Farqi"></Column>
          <Column field="accepted" header="Qabul qilingan"></Column>
          <Column field="percentage" header="%"></Column>
          <Column field="dalolatnoma" header="Dalolatnoma"></Column>
          <Column
            field="quantity"
            header="Harakat"
            body={actionsRender}
          ></Column>
        </DataTable>
      </Card>
    </section>
  );
};

export default OrdersPage;
