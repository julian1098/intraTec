import { useEffect } from 'react';
import { useService } from '../../context/Service.Context';
import ServiceList from '../../components/service/ServiceList';
//import Loading from '../../components/Loading';


function Services(props){
    const { state, findService } = useService()

    useEffect(  () => {
             findService();
        }, [] )

    return(
        <div>
            <h2 className='h4 mb-5 ms-md-5 mt-5'>Servicios</h2>
            <ServiceList />
        </div>
    )
}
export default Services;