type Character = {
    id          : string,
    name        : string,
    profile_img : string,
    description : string,
    gender      : string,
    age         : string,
    role        : string,
    height      : string,
}

interface SmallBoxProps {
    item : Character;
}

function CenterBox({ item }: SmallBoxProps) { 
    return (
        <div data-id={item.id} className="hidden flex-wrap items-center">
            <img src={item.profile_img} alt={item.description} className={`w-auto ${item.height}`} />
            <div className="bg-gray-400/30 text-white rounded-md px-5 overflow-hidden transition-all duration-650">
                <div className="mt-4">
                    <span className="inline-flex capitalize text-emerald-700 font-bold w-18">Name:</span>
                    <span className="text-emerald-700">{item.name}</span>
                </div>
                <div className="mt-2">
                    <span className="inline-flex capitalize text-emerald-700 font-bold w-18">Gender:</span>
                    <span className="text-emerald-700">{item.gender}</span>
                </div>
                <div className="mt-2">
                    <span className="inline-flex capitalize text-emerald-700 font-bold w-18">Age:</span>
                    <span className="text-emerald-700">{item.age}</span>
                </div>
                <div className="mt-2">
                    <span className="inline-flex capitalize text-emerald-700 font-bold w-18">Role:</span>
                    <span className="text-emerald-700">{item.role}</span>
                </div>
                <div className="mt-3 mb-3">
                    <a href="#" className="hover:underline text-black">+ Click for more info</a>
                </div>
            </div>
        </div>
    );
};
export default CenterBox;