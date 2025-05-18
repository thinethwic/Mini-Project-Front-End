import MedicationCard from "./component/MedicationSection";

function MedicationPage() {
  return (
    <div className="p-2">
      <h2> Medication and Treatments </h2>
      <section className="py-32 flex w-full rounded-xl shadow-sm shadow-gray-900 border-white medication mt-4"></section>
      <div className="mt-4">
        <MedicationCard />
      </div>
    </div>
  );
}

export default MedicationPage;
