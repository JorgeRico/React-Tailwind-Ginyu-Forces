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
            <div className="bg-gray-400/30 text-white rounded-md px-7 overflow-hidden transition-all duration-750">
                <div className="flex flex-wrap mt-6">
                    <div className="flex flex-unwrap items-justify items-center capitalize text-emerald-700 font-bold w-18">
                        <img src="./assets/balls/ball1.png" className="w-5.5 border-2 border-amber-500 rounded-full mt-0.5 mr-2"></img>
                        <span className="w-20">Name:</span>
                    </div>
                    <div className="text-emerald-700 ml-7">{item.name}</div>
                </div>
                <div className="flex flex-wrap mt-3">
                    <div className="flex flex-unwrap items-justify items-center capitalize text-emerald-700 font-bold w-18">
                        <img src="./assets/balls/ball2.png" className="w-5.5 border-2 border-amber-500 rounded-full mt-0.5 mr-2"></img>
                        <span className="w-20">Gender:</span>
                    </div>
                    <span className="text-emerald-700 ml-7">{item.gender}</span>
                </div>
                <div className="flex flex-wrap mt-3">
                    <div className="flex flex-unwrap items-justify items-center capitalize text-emerald-700 font-bold w-18">
                        <img src="./assets/balls/ball3.png" className="w-5.5 border-2 border-amber-500 rounded-full mt-0.5 mr-2"></img>
                        <span className="w-20">Age:</span>
                    </div>
                    <span className="text-emerald-700 ml-7">{item.age}</span>
                </div>
                <div className="flex flex-wrap mt-3">
                    <div className="flex flex-unwrap items-justify items-center capitalize text-emerald-700 font-bold w-18">
                        <img src="./assets/balls/ball4.png" className="w-5.5 border-2 border-amber-500 rounded-full mt-0.5 mr-2"></img>
                        <span className="w-20">Role:</span>
                    </div>
                    <span className="text-emerald-700 ml-7">{item.role}</span>
                </div>
                <div className="flex flex-wrap mt-4 mb-5">
                    <a href="#" className="flex flex-wrap items-justify items-center hover:underline text-black">
                        <img src="./assets/balls/balls-online.png" className="w-20"></img>
                        <span className="ml-3.5 w-50 text-emerald-700">+ Click for more info</span></a>
                </div>
            </div>
        </div>
    );
};
export default CenterBox;