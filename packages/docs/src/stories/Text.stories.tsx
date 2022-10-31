import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text, 
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Exercitationem sapiente eum iusto similique? Ab repellendus aliquid 
    voluptates deleniti deserunt ex, odit voluptatum ad corrupti 
    praesentium voluptatem excepturi earum modi laborum.`,
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Exercitationem sapiente eum iusto similique? Ab repellendus aliquid 
    voluptates deleniti deserunt ex, odit voluptatum ad corrupti 
    praesentium voluptatem excepturi earum modi laborum.`,
    as: 'strong'
  }
}
