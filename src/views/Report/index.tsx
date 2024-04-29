import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';
import { useState } from "react";


const ReportsPage = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <section>
            <div className='flex px-2'>
                <h3 className='text-3xl'>Darsliklar</h3>
            </div>
            <Card>
                <div className="flex flex-wrap">
                    <div className='w-1/4 px-2 mt-4'>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                        placeholder="Viloyat" className="w-full" />
                    </div>
                    <div className='w-1/4 px-2 mt-4'>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                        placeholder="Tuman / Shahar" className="w-full" />
                    </div>
                    <div className='w-1/4 px-2 mt-4'>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                        placeholder="Maktab" className="w-full" />
                    </div>
                    <div className='w-1/4 px-2 mt-4'>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                        placeholder="O'quv yili" className="w-full" />
                    </div>
                    <div className='w-1/4 px-2 mt-4'>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                        placeholder="Sinflar" className="w-full" />
                    </div>
                    <div className='w-1/4 px-2 mt-4'>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                        placeholder="Fanlar" className="w-full" />
                    </div>
                    <div className='w-1/4 px-2 mt-4'>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                        placeholder="Ta'lim tili" className="w-full" />
                    </div>
                </div>
            </Card>
            <div className='flex flex-wrap mt-8'>
                <div className='w-1/4 p-3'>
                    <div className='border bg-white p-4 rounded-lg shadow'>
                        <h3 className='text-center text-2xl'>Umumiy darsliklar</h3>
                        <p className='text-center text-lg'>1600</p>
                    </div>
                </div>
                <div className='w-1/4 p-3'>
                    <div className='border bg-white p-4 rounded-lg shadow'>
                        <h3 className='text-center text-2xl'>Tarqatilgan darsliklar</h3>
                        <p className='text-center text-lg'>400</p>
                    </div>
                </div>
                <div className='w-1/4 p-3'>
                    <div className='border bg-white p-4 rounded-lg shadow'>
                        <h3 className='text-center text-2xl'>Zaxiradagi darsliklar</h3>
                        <p className='text-center text-lg'>1200</p>
                    </div>
                </div>
                <div className='w-1/4 p-3'>
                    <div className='border bg-white p-4 rounded-lg shadow'>
                        <h3 className='text-center text-2xl'>Yetishmagan darsliklar</h3>
                        <p className='text-center text-lg'>50</p>
                    </div>
                </div>
            </div>
            <div className='mt-12 px-4'>
                <h2 className='text-3xl text-blue-600'>Darsliklar to'plami</h2>
            </div>
            <Card>
                <div className="flex flex-wrap">
                    <div className='w-1/4 px-2 mt-4'>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                        placeholder="Viloyat" className="w-full" />
                    </div>
                    <div className='w-1/4 px-2 mt-4'>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                        placeholder="Tuman / Shahar" className="w-full" />
                    </div>
                    <div className='w-1/4 px-2 mt-4'>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                        placeholder="Maktab" className="w-full" />
                    </div>
                    <div className='w-1/4 px-2 mt-4'>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                        placeholder="O'quv yili" className="w-full" />
                    </div>
                    <div className='w-1/4 px-2 mt-4'>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                        placeholder="Sinflar" className="w-full" />
                    </div>
                    <div className='w-1/4 px-2 mt-4'>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                        placeholder="Fanlar" className="w-full" />
                    </div>
                    <div className='w-1/4 px-2 mt-4'>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
                        placeholder="Ta'lim tili" className="w-full" />
                    </div>
                </div>
            </Card>

            <div className='flex flex-wrap mt-8 h-full'>
                <div className='w-1/4 p-3 flex h-full'>
                    <div className='border bg-white p-4 rounded-lg shadow w-full'>
                        <h3 className='text-center text-2xl'>Umumiy darsliklar</h3>
                        <p className='text-center text-lg'>600</p>
                    </div>
                </div>
                <div className='w-1/4 p-3 flex h-full'>
                    <div className='border bg-white p-4 rounded-lg shadow'>
                        <h3 className='text-center text-2xl'>Tarqatilgan darsliklar (to'plam)</h3>
                        <p className='text-center text-lg'>20</p>
                    </div>
                </div>
                <div className='w-1/4 p-3 flex h-full'>
                    <div className='border bg-white p-4 rounded-lg shadow'>
                        <h3 className='text-center text-2xl'>Zaxiradagi darsliklar (to'plam)</h3>
                        <p className='text-center text-lg'>580</p>
                    </div>
                </div>
                <div className='w-1/4 p-3 flex h-full'>
                    <div className='border bg-white p-4 rounded-lg shadow'>
                        <h3 className='text-center text-2xl'>Yetishmagan darsliklar (to'plam)</h3>
                        <p className='text-center text-lg'>50</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReportsPage;