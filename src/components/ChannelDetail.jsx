import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null)
  const [videos, setvideos] = useState([])

  const { id } = useParams();

  //console.log(channelDetail, videos)

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
       .then((data) => setchannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setvideos(data?.items));   
  }, [id])
  
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{ 
          background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(201,9,9,1) 48%, rgba(0,0,0,1) 100%)',
          zIndex: 10,
          height: '300px'
        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop= "-110px"/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '100px' }}}/>
          <Videos videos={videos}/>

      </Box>
      
    </Box>
  )
}

export default ChannelDetail