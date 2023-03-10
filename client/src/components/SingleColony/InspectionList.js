import InspectionCard from "./InspectionCard"
import NewInspectionForm from "./NewInspectionForm";
import './InspectionList.css'


const InspectionList = ({apiaryData, selectedColony, weather, addInspection, deleteInspection}) => {

    const colony = apiaryData.colonies.filter(colony => {
        return colony._id === selectedColony;
    })[0];

    const inspectionNodes = colony.inspections.map((inspection, index) => {
        return <InspectionCard 
                        key={index} 
                        inspection={inspection} 
                        deleteInspection={deleteInspection} 
                        selectedColony={selectedColony}
                />
    })

    return (
        <>
            <div className="inspection-cards-wrapper">
                {inspectionNodes}
                </div>
            <h3 id="add-insp-title">Add New Inspection</h3>
            <NewInspectionForm 
                addInspection={addInspection} 
                apiary_id={apiaryData._id}
                colony_id={selectedColony}
            />
        </>
    )
}

export default InspectionList;
