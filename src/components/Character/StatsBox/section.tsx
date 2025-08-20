interface SmallBoxProps {
    image : string;
    text  : string;
    name  : string;
}

function SectionBox({ image, text, name }: SmallBoxProps) { 
    return (
        <section className="flex flex-wrap mt-6">
            <div className="flex flex-unwrap items-justify items-center capitalize text-emerald-700 font-bold w-18">
                <img src={image} className="w-5.5 border-2 border-amber-500 rounded-full mt-0.5 mr-2"></img>
                <span className="w-20">{text}</span>
            </div>
            <div className="text-emerald-700 ml-7">{name}</div>
        </section>                
    );
};



export default SectionBox;