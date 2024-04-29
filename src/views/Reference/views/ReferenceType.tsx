import { DataTable } from "primereact/datatable";
import { tableList } from "../../../utils";
import { Column } from "primereact/column";
import {
  actionForReferencePage,
  motherLangBodyTemplate,
  yearBodyTemplate,
} from "../components/OtherFunctions";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../../store";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { useState } from "react";

const ReferenceType = () => {
  const dispatch = useDispatch<Dispatch>();
  const { typeMOdal } = useSelector((state: RootState) => state.modalStore);
  const [searchValue] = useState('')
  const [selectedForm, setSelectedForm] = useState(null)

  
  return (
    <div className="p-[20px]">
      <div className="flex justify-between items-center mb-[20px]">
        <h3 className="text-2xl text-[black] font-[700]">Majmualar turi</h3>

        <Button label="Qo'shish" onClick={() => dispatch.modalStore.setTypeModal(true)} />
      </div>
      <Card>
        <DataTable
          value={tableList}
          tableStyle={{
            minWidth: "60rem",
          }}
          paginator
          rows={5}
        >
          <Column
            field="name"
            header="Majmualar nomi"
            body={motherLangBodyTemplate}
          ></Column>
          <Column
            field="Nashr yili"
            header="Nashr yili"
            body={yearBodyTemplate}
          ></Column>
          <Column field="class" header="Class"></Column>

          <Column field="action" header="Harakat" body={actionForReferencePage} />
        </DataTable>
      </Card>
      <Dialog
        header="Darslik majualarini qo'shish"
        visible={typeMOdal}
        onHide={() => dispatch.modalStore.setFirstModal(false)}
        className="w-[35vw] "
      >
        <div>
        <InputText value={searchValue} placeholder="Darslik nomi" className="w-full" />
          <Dropdown value={selectedForm} onChange={(e) => setSelectedForm(e.value)} options={[
            {name: '2010', value: 2010},
            {name: '2015', value: 2015},
            {name: '2016', value: 2016},
            {name: '2017', value: 2017},
          ]} optionLabel="name" 
          placeholder="Nashr yili" className="w-full mt-10" 
        />
        </div>
        <div className="flex justify-between mt-10">
          <Button
            label="Ortga"
            severity="secondary"
            onClick={() => dispatch.modalStore.setTypeModal(false)}
          />
          <Button
            label="Qoshish"
            severity="info"
            onClick={() => dispatch.modalStore.setTypeModal(false)}
          />
        </div>
        
      </Dialog>
    </div>
  );
};

export default ReferenceType;
