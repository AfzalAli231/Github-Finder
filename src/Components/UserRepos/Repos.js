import React from 'react'
import ReposItem from './ReposItem'

export default function Repos({repos}) {
        return repos.map((repo) => <ReposItem key={repo.id} repo={repo} />);
}
