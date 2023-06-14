// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Data, DataError } from "../../interfaces";

let projects = [
  {
    id: 1,
    name: 'Maze generator',
    description: 'A maze generator using the recursive backtracker algorithm.',
    img: 'https://raw.githubusercontent.com/vsecoder/maze-generater/main/maze.png',
    now_status: 'Completed',
    badges: [
      {
        label: 'python',
        emoji: '🐍'
      },
      {
        label: 'learning',
        emoji: '📚'
      }
    ],
    link: 'https://github.com/vsecoder/maze-generator',
  },
  {
    id: 2,
    name: 'Decent catbot',
    description: 'A bot for multifunctional chat moderation. The bot has both the usual commands (ban, unban, kick, mute, unmute) and special protections that can be configured and used',
    img: 'https://raw.githubusercontent.com/vsecoder/decent-catbot/master/.github/workflows/photo_2022-06-13_09-33-03.jpg',
    now_status: 'Closed',
    badges: [
      {
        label: 'python',
        emoji: '🐍'
      },
      {
        label: 'useful',
        emoji: '🔌'
      }
    ],
    link: 'https://github.com/vsecoder/decent-catbot',
  },
  {
    id: 3,
    name: 'Memogram',
    description: 'Memogram is a infinity scroll meme website. It is made with React and Next.js',
    img: 'https://raw.githubusercontent.com/vsecoder/memogram/main/memogram.jpg?token=GHSAT0AAAAAACCPNQXL4T6LPKV42O2Y34YMZEJU3OQ',
    now_status: 'Closed',
    badges: [
      {
        label: 'react',
        emoji: '⚛️'
      },
      {
        label: 'fun',
        emoji: '🤣'
      }
    ],
    link: 'https://github.com/vsecoder/memogram',
  },
  {
    id: 4,
    name: 'VsecoderTester',
    description: 'The isolated code testing environment for python. It is made with Docker and Python',
    img: 'https://raw.githubusercontent.com/vsecoder/vsecodertester/main/vsecodertester.jpg',
    now_status: 'Closed',
    badges: [
      {
        label: 'docker',
        emoji: '🐳'
      },
      {
        label: 'python',
        emoji: '🐍'
      },
      {
        label: 'learning',
        emoji: '📚'
      }
    ],
    link: 'https://github.com/vsecoder/vsecodertester',
  },
  {
    id: 5,
    name: 'Date',
    description: 'VK mini app for planning dates. It is made with React, VKUI and Python',
    img: 'https://raw.githubusercontent.com/vsecoder/vsecoder/main/banners/date.jpg',
    now_status: 'Completed',
    badges: [
      {
        label: 'react',
        emoji: '⚛️'
      },
      {
        label: 'python',
        emoji: '🐍'
      },
      {
        label: 'teamwork',
        emoji: '🤝'
      },
      {
        label: 'winner',
        emoji: '🏆'
      }
    ],
    link: 'https://vk.com/date_s',
  },
  {
    id: 6,
    name: 'VseMangaBot',
    description: 'Telegram bot for reading manga. It is made with Python and NewManga API (not working now)',
    img: 'https://raw.githubusercontent.com/vsecoder/vsecoder/main/banners/vsemanga.jpg',
    now_status: 'Completed',
    badges: [
      {
        label: 'python',
        emoji: '🐍'
      },
      {
        label: 'bot',
        emoji: '🤖'
      },
      {
        label: 'anime',
        emoji: '👺'
      }
    ],
    link: 'https://github.com/vsecoder/VseMangaBot',
  },
  {
    id: 7,
    name: 'Video21',
    description: 'Video hosting with recommendation system and subtitles generated by AI',
    img: 'https://raw.githubusercontent.com/vsecoder/vsecoder/main/banners/video21.jpg',
    now_status: 'Completed',
    badges: [
      {
        label: 'react',
        emoji: '⚛️'
      },
      {
        label: 'python',
        emoji: '🐍'
      },
      {
        label: 'teamwork',
        emoji: '🤝'
      },
      {
        label: 'winner',
        emoji: '🏆'
      },
      {
        label: 'AI',
        emoji: '🤖'
      }
    ],
    link: 'https://vk.com/viddeo_perevorot',
  },
  {
    id: 8,
    name: 'Russian toxic messages classification',
    description: 'AI model for classifying toxic messages in Russian. It is made with Python and Scikit-learn',
    img: 'https://raw.githubusercontent.com/vsecoder/vsecoder/main/banners/rutoxic.png',
    now_status: 'Completed',
    badges: [
      {
        label: 'python',
        emoji: '🐍'
      },
      {
        label: 'AI',
        emoji: '🤖'
      },
      {
        label: 'learning',
        emoji: '📚'
      },
      {
        label: 'useful',
        emoji: '🔌'
      }
    ],
    link: 'https://github.com/vsecoder/ru-toxic-messages-classification',
  },
  {
    id: 9,
    name: 'TomatoClanBot',
    description: 'Clan game in Telegram. Rules: https://telegra.ph/Klan-tomatov-03-30',
    img: 'https://raw.githubusercontent.com/vsecoder/vsecoder/main/banners/tomatoclan.jpg',
    now_status: 'In progress',
    badges: [
      {
        label: 'python',
        emoji: '🐍'
      },
      {
        label: 'fun',
        emoji: '🤣'
      },
      {
        label: 'game',
        emoji: '🎲'
      }
    ],
    link: 'https://github.com/vsecoder/TomatoClanBot',
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | DataError>
) {
  if (projects) {
    res.status(200).json(projects)
  } else {
    res.status(404).json({ message: 'Projects not found.' })
  }
}
