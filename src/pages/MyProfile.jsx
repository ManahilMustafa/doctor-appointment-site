import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Edward Vincent',
    image: assets.profile_pic,
    email: 'richarvincent@gmail.com',
    phone: '+1 123 456 7890',
    address: {
      line1: '57th Cross, Richmond',
      line2: 'Circle, Church Road, London'
    },
    gender: 'Male',
    dob: '2003-05-09'
  });
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <div className="flex items-start gap-6 mb-6">
        <img src={userData.image} alt="Profile" className="w-20 h-20 object-cover border border-gray-300" />
        <div className="flex flex-col">
          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
              className="text-xl font-semibold border-b-2 border-gray-300 outline-none focus:border-blue-500"
            />
          ) : (
            <p className="text-xl font-semibold">{userData.name}</p>
          )}
          <button
            onClick={() => setIsEdit((prev) => !prev)}
            className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-md hover:bg-blue-600 transition-all"
          >
            {isEdit ? 'Save information' : 'Edit'}
          </button>
        </div>
      </div>

      <hr className="my-6" />

      <div className="space-y-4">
        <h2 className="text-sm font-semibold text-gray-500">CONTACT INFORMATION</h2>
        <div className="flex justify-between items-center">
          <p className="font-medium">Email:</p>
          <p className="text-blue-500">{userData.email}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))}
              className="border-b-2 border-gray-300 outline-none focus:border-blue-500"
            />
          ) : (
            <p>{userData.phone}</p>
          )}
        </div>
        <div className="flex flex-col">
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <div className="space-y-1">
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value }
                  }))
                }
                value={userData.address.line1}
                type="text"
                className="border-b-2 border-gray-300 outline-none focus:border-blue-500"
              />
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value }
                  }))
                }
                value={userData.address.line2}
                type="text"
                className="border-b-2 border-gray-300 outline-none focus:border-blue-500"
              />
            </div>
          ) : (
            <p>
              {userData.address.line1} <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      <hr className="my-6" />

      <div className="space-y-4">
        <h2 className="text-sm font-semibold text-gray-500">BASIC INFORMATION</h2>
        <div className="flex justify-between items-center">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))}
              value={userData.gender}
              className="border-2 border-gray-300 rounded-md focus:border-blue-500"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}
        </div>
        <div className="flex justify-between items-center">
          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              type="date"
              value={userData.dob}
              onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))}
              className="border-2 border-gray-300 rounded-md focus:border-blue-500"
            />
          ) : (
            <p>{new Date(userData.dob).toLocaleDateString()}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
