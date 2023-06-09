import React, { useState } from 'react';
import { supabase } from '../utils/supaBase';
// import { parse } from 'csv-parse';


const BulkImport = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
        try {
          const { data: file, error: uploadError } = await supabase.storage
            .from('test')
            .upload(`folder/${selectedFile.name}`, selectedFile);
  
          if (uploadError) {
            throw new Error('Error uploading CSV file');
          } else {
            const { data } = supabase
            .storage
            .from('test')
            .getPublicUrl('folder/test.csv')
            console.log(data)
            const csvUrl = data.publicUrl;



            // new soln

            // // Read the CSV file data
            // const response = await fetch(csvUrl);
            // const csvText = await response.text();
          
            // // Parse the CSV data
            // parse(csvText, { columns: true }, async (err, records) => {
            //   if (err) {
            //     console.error('Error parsing CSV:', err);
            //     return;
            //   }
          
            //   // Insert each row into the target table
            //   for (const row of records) {
            //     const { data, error } = await supabase.from('your_table_name').insert(row);
          
            //     if (error) {
            //       console.error('Error inserting CSV row:', error);
            //     }
            //   }
          
            //   console.log('CSV data inserted successfully');
            // });






            // prev soln
            
            // const { data: importResult, error: importError } = await supabase.rpc('import_csv', {
            //     table_name: 'test',
            //     file_url: data.publicUrl,
            //   });
      
            //   if (importError) {
            //     throw new Error('Error importing CSV data to Supabase');
            //   }
      
            //   console.log('CSV data imported successfully:', importResult);

          }
  
  
  
          
        } catch (error) {
          console.error('Error:', error.message);
        }
      }
    };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default BulkImport;
