import PropertyList from "../components/properties/PropertyList"
import { getUserId } from "../lib/actions"

const myPropertiesPage = async () => {
    const userId = await getUserId();
    return (
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
           <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <PropertyList landlord_id={userId}/>
                    </div>
        </main>
    )

}

export default myPropertiesPage