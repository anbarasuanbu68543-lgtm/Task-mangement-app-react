import Navbar from '../components/Navbar.js'
import Edit from '../components/Edit.js'


function Home({tableData, handleEdit, handleDelete}){
    
    return (
        <>
        <Navbar/>        
        <Edit tableData={tableData}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      />        
        </>
    )
}

export default Home