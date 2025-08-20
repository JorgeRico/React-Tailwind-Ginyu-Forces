import { useParams } from 'react-router-dom';
import Layout from './layout'

function Character() {
    const { name } = useParams();

    return (
        <>
            <Layout>
                {name}
            </Layout>
        </>
    )
}

export default Character;