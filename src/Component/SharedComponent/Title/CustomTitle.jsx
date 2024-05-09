import { Typography } from '@material-tailwind/react';

const CustomTitle = ({ title, double, }) => {
    return (
        <div className="flex w-max uppercase items-center mb-5">
            <img loading="lazy" src='https://i.ibb.co/F0G8mj1/download.png' className="pr-3" alt="" />
            <Typography variant="h6" className="text-primary-teal">{title}</Typography>
            {double ? <img loading="lazy" src='https://i.ibb.co/F0G8mj1/download.png' className="pl-3" alt="" /> : ''}
        </div>
    );
};

export default CustomTitle;