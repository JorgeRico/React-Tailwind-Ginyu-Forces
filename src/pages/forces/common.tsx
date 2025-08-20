type Character = {
    id                   : string,
    name                 : string,
    head_img             : string,
    description_extended : string[],
    appearance           : string[],
    personality          : string[],
    biography            : string[],
}

interface CharacterProps {
    item : Character;
}

function Character({ item }: CharacterProps) {

    return (
        <>
            <section className="flex max-md:flex-wrap max-md:justify-center gap-7">
                <img src={item.head_img} alt={item.name} className="border-amber-400 rounded-md border-2 w-auto max-h-80 mb-4" />
                <div className="">
                    <section className="mb-5">
                        <h2 className="font-extrabold text-2xl mb-3">{item.name}</h2>
                        <p><strong>{item.name}</strong> {item.description_extended}</p>
                    </section>

                    <section>
                        <h2 className="font-extrabold text-2xl mb-3">Apprearance</h2>
                        {item.appearance.map((elem) => {
                            return (
                                <p className="mb-3">{elem}</p>
                            )
                        })}
                    </section>
                </div>
            </section>
                    
            <section className="mb-5">
                <h2 className="font-extrabold text-2xl mb-3">Personality</h2>
                {item.personality.map((elem) => {
                    return (
                        <p className="mb-3">{elem}</p>
                    )
                })}
            </section>
            
            {item.biography && item.biography.length > 0 &&
                <section className="mb-5">
                    <h2 className="font-extrabold text-2xl mb-3">Biography</h2>
                    {item.biography?.map((elem) => {
                        return (
                            <p className="mb-3">{elem}</p>
                        )
                    })}
                </section>
            }
        </>
    )
}

export default Character;