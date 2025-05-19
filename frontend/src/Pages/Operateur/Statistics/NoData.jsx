import React, { useState } from 'react';
import Papa from 'papaparse';
import * as XLSX from 'xlsx';

function NoData() {
  const [parsedData, setParsedData] = useState([]);
  const [error, setError] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileName = file.name.toLowerCase();
    const reader = new FileReader();

    if (fileName.endsWith('.csv')) {
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          setParsedData(results.data);
          setError(null);
        },
        error: (err) => setError(`CSV parsing error: ${err.message}`),
      });
    } else if (fileName.endsWith('.xlsx') || fileName.endsWith('.xls')) {
      reader.onload = (e) => {
        const workbook = XLSX.read(e.target.result, { type: 'binary' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = XLSX.utils.sheet_to_json(sheet);
        setParsedData(data);
        setError(null);
      };
      reader.readAsBinaryString(file);
    } else if (fileName.endsWith('.json')) {
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          setParsedData(Array.isArray(data) ? data : [data]);
          setError(null);
        } catch (err) {
          setError('Invalid JSON file');
        }
      };
      reader.readAsText(file);
    } else {
      setError('Unsupported file type');
    }
  };

  return (
    <div className='text-center mt-16'>
      <h5 className='text-3xl font-bold text-gray-900 mb-4'>Upload Water Data</h5>
      <p className='text-base text-gray-500 sm:text-lg mb-14'>Upload your CSV, Excel, or JSON water data <br></br> (e.g. humidity, pressure, etc).</p>

      <div className='flex items-center justify-center w-2/3 mx-auto'>
        <label htmlFor='dropzone-file' className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 hover:border-gray-400 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all'>
          <div className='flex flex-col items-center justify-center pt-5 pb-6'>
            <svg className='w-8 h-8 mb-4 text-gray-500' fill='none' viewBox='0 0 20 16'>
              <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'/>
            </svg>
            <p className='mb-2 text-sm text-gray-500'><span className='font-semibold'>Click to upload</span></p>
            <p className='text-xs text-gray-500'>CSV, Excel or JSON</p>
          </div>
          <input id='dropzone-file' type='file' className='hidden' onChange={handleFileChange} />
        </label>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {parsedData.length > 0 && (
        <div className='mt-6 text-left max-w-4xl mx-auto'>
          <h3 className='text-lg font-semibold mb-2'>Parsed Data Preview:</h3>
          <pre className='bg-gray-100 p-4 rounded-md max-h-96 overflow-auto text-sm'>
            {JSON.stringify(parsedData.slice(0, 5), null, 2)}
          </pre>
          <p className='text-sm text-gray-500 mt-2'>Showing first 5 rows.</p>
        </div>
      )}
    </div>
  );
}

export default NoData;
