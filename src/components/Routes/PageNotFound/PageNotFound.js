import { ReactComponent as ErrorSVG } from './error404.svg';
import { motion } from 'framer-motion/dist/framer-motion';

const PageNotFound = () => {
    return (
        <div className='pageNotFound'>
            {/* <img src={Error404} alt={"error404"}/> */}
            <ErrorSVG width={'15rem'} />
            <motion.span animate={{fontSize: '50px'}}>Page not found</motion.span>
        </div>
    )
}

export default PageNotFound