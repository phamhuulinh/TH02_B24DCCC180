import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Article {
    id: number;
    title: string;
    url: string;
    image_url: string;
    summary: string;
    published_at: string;
}

const News: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    axios.get('https://api.spaceflightnewsapi.net/v4/articles?limit=10')
      .then(res => setArticles(res.data.results))
      .catch(() => console.error('Lỗi tải tin tức'));
  }, []);

  return (
    <div style={{ padding: 20, alignContent: 'center' }}>
      <h2 style={{ textAlign: 'center', fontSize: '34px'}}>Tin tức</h2>
      <div style={{ width: '50%',
                    margin: '0 auto',
                    }}>
        {articles.map((item) => (
          <div style={{ border: '1px solid #ccc',padding: '20px'}}
            key={item.id}>
            <img src={item.image_url} alt={item.title} width="40%" />
            <h4 style={{ fontSize: '20px'}}>{item.title}</h4>
            <p>{item.summary}</p>
            <a href={item.url} target="_blank" rel="noreferrer">Xem chi tiết</a>
            <p>Ngày đăng: {new Date(item.published_at).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
