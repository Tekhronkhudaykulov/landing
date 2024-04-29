import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { tableList } from "../../../utils";
import { Dialog } from "primereact/dialog";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../../store";
import {
  actionForReferencePage,
  authorBodyTemplate,
  imageBodyTemplate,
  motherLangBodyTemplate,
  strixBodyTemplate,
  yearBodyTemplate,
} from ".././components/OtherFunctions";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { useState } from "react";

const ReferencePageMain = () => {
  const dispatch = useDispatch<Dispatch>();
  const { modalFrist } = useSelector((state: RootState) => state.modalStore);
  const [searchValue, setSearchValue] = useState('')
  const [selectedForm, setSelectedForm] = useState(null)

  return (
    <div className="p-[20px]">
      <div className="flex justify-between items-center mb-[20px]">
        <p className="text-2xl text-[black] font-[700]">
          Darslik majmualari
        </p>
        <InputText value={searchValue} placeholder="Search" onChange={(e) => setSearchValue(e.target.value)} />
        <Dropdown value={selectedForm} onChange={(e) => setSelectedForm(e.value)} options={[
          {name: '2010', value: 2010},
          {name: '2015', value: 2015},
          {name: '2016', value: 2016},
          {name: '2017', value: 2017},
        ]} optionLabel="name" 
          placeholder="Nashr yili" className="w-[16rem] md:w-14rem" />
        
        <Button label="Qoshish" severity="info" onClick={() => dispatch.modalStore.setFirstModal(true)} />

      </div>
      <Card>
        <DataTable
          value={tableList}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25, 50]}
        >
          <Column header="Darslikning rasmi" body={imageBodyTemplate}></Column>
          <Column
            field="name"
            header="Darslikning nomi"
            body={motherLangBodyTemplate}
          ></Column>
          <Column
            field="Nashr yili"
            header="Nashr yili"
            body={yearBodyTemplate}
          ></Column>
          <Column field="class" header="Class"></Column>
          <Column
            field="strix-kod"
            header="Strix-kod"
            body={strixBodyTemplate}
          ></Column>
          <Column
            field="muallif"
            header="Muallif"
            body={authorBodyTemplate}
          ></Column>
          <Column field="action" header="Harakat" body={actionForReferencePage} />
        </DataTable>
      </Card>
      <Dialog
        header="Darslik majualarini qo'shish"
        visible={modalFrist}
        onHide={() => dispatch.modalStore.setFirstModal(false)}
        className="w-[40vw] "
      >
        <div className="flex gap-x-5">
          <InputText value={searchValue} placeholder="Darslik nomi Uz" className="w-1/2" />
          <InputText value={searchValue} placeholder="Darslik nomi Ru" className="w-1/2" />
        </div>
        <div className="flex gap-x-5 mt-10">
          <InputText value={searchValue} placeholder="Muallif Uz" className="w-1/2" />
          <InputText value={searchValue} placeholder="Muallif Ru" className="w-1/2" />
        </div>
        <div className="flex gap-x-5 mt-10">
        <Dropdown value={selectedForm} onChange={(e) => setSelectedForm(e.value)} options={[
            {name: '2010', value: 2010},
            {name: '2015', value: 2015},
            {name: '2016', value: 2016},
            {name: '2017', value: 2017},
          ]} optionLabel="name" 
          placeholder="Nashr yili" className="w-1/2" 
        />
          <Dropdown value={selectedForm} onChange={(e) => setSelectedForm(e.value)} options={[
              {name: '1', value: 1},
              {name: '2', value: 2},
              {name: '3', value: 3},
              {name: '4', value: 4},
              {name: '5', value: 5},
              {name: '6', value: 6},
              {name: '7', value: 7},
              {name: '8', value: 9},
            ]} optionLabel="name" 
            placeholder="Sinf" className="w-1/2" 
          />
        </div>
        <div className="flex gap-x-5 mt-10">
          <div className="w-1/2">
            <input type="file" />
          </div>
          <div className="w-1/2">
            <InputText value={searchValue} placeholder="Shtrix kod" className="w-full" />
          </div>
        </div>
        
        <div className="flex justify-between mt-10">
          <Button
            label="Ortga"
            severity="secondary"
            onClick={() => dispatch.modalStore.setFirstModal(false)}
          />
          <Button
            label="Qoshish"
            severity="info"
            onClick={() => dispatch.modalStore.setFirstModal(false)}
          />
        </div>
      </Dialog>
    </div>
  );
};

export default ReferencePageMain;
