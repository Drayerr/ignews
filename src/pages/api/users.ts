import { NextApiRequest, NextApiResponse } from 'next'

export default function GetUsers(req : NextApiRequest, res : NextApiResponse) {
  const users = [
    {id: 1, name: 'Drayerr'},
    {id: 2, name: 'Igor'},
    {id: 3, name: 'Carol'},
  ]

  return res.json(users)
}