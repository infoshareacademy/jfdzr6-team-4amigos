import { MdDirectionsBike, MdDirectionsWalk, MdOutlineNordicWalking } from 'react-icons/md';
import { BiRun } from 'react-icons/bi';
import { CgGym } from 'react-icons/cg';
import { GiShuttlecock, GiRollerSkate, GiFishingPole } from 'react-icons/gi';

export const sportsIcon = {
    bike: <MdDirectionsBike />,
    walk: <MdDirectionsWalk />,
    running: <BiRun />,
    gym: <CgGym />,
    rollerSkating: <GiRollerSkate />,
    fishing: <GiFishingPole />,
    tennis: <GiShuttlecock />,
    nordicWalking:<MdOutlineNordicWalking/>
}

export const sportExperience = {
    amateur: "10%",
    intermediate: "50%",
    advanced: "100%",
}