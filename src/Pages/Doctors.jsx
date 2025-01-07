import { useParams } from 'react-router';

const Doctors = () => {
    const {specialty} = useParams()
    console.log(specialty)
    return (
        <div>
            
        </div>
    );
};

export default Doctors;