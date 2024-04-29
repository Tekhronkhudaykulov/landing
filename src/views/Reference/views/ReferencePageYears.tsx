import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../../store";
import { DataTable } from "primereact/datatable";
import { tableList } from "../../../utils";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from 'primereact/inputtext';
import { yearBodyTemplate } from "../components/OtherFunctions";
import { useState } from "react";

const ReferencePageYears = () => {
  const dispatch = useDispatch<Dispatch>();
  const { modalForYear } = useSelector((state: RootState) => state.modalStore);
  const [searchValue] = useState('')

  
  return (
    <div className="p-[20px]">
      <div className="flex justify-between items-center mb-[20px]">
        <h3 className="text-3xl text-[black] font-[700]">Yillar</h3>

        <Button label="Qo'shish" onClick={() => dispatch.modalStore.setYear(true)}></Button>
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
            field="Nashr yili"
            header="Nashr yili"
            body={yearBodyTemplate}
          ></Column>
        </DataTable>
      </Card>
      <Dialog
        header="Darslik majualarini qo'shish"
        visible={modalForYear}
        onHide={() => dispatch.modalStore.setYear(false)}
        className="w-[30vw] "
      >
        <div className="flex justify-between">
          <InputText value={searchValue} placeholder="Nashr yili" className="w-full" />
        </div>

        <div className="flex justify-between mt-10">
          <Button
            label="Ortga"
            severity="secondary"
            onClick={() => dispatch.modalStore.setYear(false)}
          />
          <Button
            label="Qoshish"
            severity="info"
            onClick={() => dispatch.modalStore.setYear(false)}
          />
        </div>
      </Dialog>
    </div>
  );
};

export default ReferencePageYears;
