import type { Meta, StoryObj } from '@storybook/react'
import { Session } from 'next-auth'
import { http } from 'msw'
import { MoviesFeature } from '@/components/moviesFeature'
import * as movies from '../../../mocks/movies.json'


const meta: Meta<typeof MoviesFeature> = {
  title: 'HomeWeb/MovieFeature',
  component: MoviesFeature,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof MoviesFeature>;

const mockSession: Session = {
  expires: '1',
  user: { email: 'a', name: 'Delta', image: 'c' },
}
export const Text: Story = {
  args: {
    session: mockSession
  },
  parameters: {
    msw: [
      http.get('api/moviedata', () => {
        return new Response(JSON.stringify(movies), {
          headers: {
            'Content-Type': 'application/json',
          }
        })
      }),
    ],
    nextjs: {
      router: {
        pathname: 'movieda',
        query: {
          id: '1'
        },
      },
    },
  },
}
