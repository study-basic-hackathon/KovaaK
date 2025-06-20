import { Text, type TextProps } from '@chakra-ui/react'

export const Copyright = (props: TextProps) => {
  return (
    <Text fontSize="sm" color="fg.muted" {...props}>
      &copy; {new Date().getFullYear()} Logo, Inc. All rights reserved.
    </Text>
  )
}