import React from 'react';
import PropTypes from 'prop-types';
// import { formatDate } from '../../../Tools';

import './style.scss';

const ProfileHeader = ({ profile }) => {

//    const { firstName, lastName, streetAddr, postcode, city, email } = props.profile;
   // let createdAt = formatDate(props.profile.createdAt, 'MM/DD/yyyy HH:mm');

   return (
      <header className="profile-header">
         <div className="profile-user-info">
            <h3>
               {profile.firstName} {profile.lastName}
            </h3>
            <p>
               {profile.streetAddr}, {profile.postcode} {profile.city}
            </p>
            <p>
               <strong>Email: </strong> {profile.email}
            </p>
            <p>
               <strong>Phone: </strong> {profile.phone}
            </p>
            {/* <p>
               <strong>Registered on</strong> {createdAt}
            </p> */}
         </div>

         <img src="https://placehold.it/200x200" alt={`${profile.firstName} ${profile.lastName} profile`} />
      </header>
   );
};

ProfileHeader.propTypes = {
   client: PropTypes.object
};

export default ProfileHeader;
