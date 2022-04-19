import React from 'react'
import {Link} from 'react-router-dom'
import {
  Button,
  ButtonProps,
  Link as MaterialLink,
} from '@mui/material'
import { makeStyles } from "@mui/styles";
import clsx from 'clsx'

type Props = {
  to: string
  text?: React.ReactNode
  external?: boolean
  asButton?: boolean
  buttonClass?: string
  color?: ButtonProps['color']
  variant?: ButtonProps['variant']
  size?: ButtonProps['size']
} & React.HTMLAttributes<HTMLAnchorElement>

export const Anchor = ({
  to,
  text,
  children,
  external,
  asButton,
  buttonClass,
  className,
  color = 'primary',
  variant = 'outlined',
  size = 'medium',
  ...props
}: Props) => {
  const styles = useStyles()

  if (asButton) {
    return (
      <Button
      {...props}
      component={external ? "a" : Link}
      href={external ? to : undefined}
      to={external ? undefined : to}
        color={color}
        variant={variant}
        size={size}
        sx={{textTransform: 'none'}}
        className={clsx(styles.textLinks, buttonClass)}
      >
        {children ?? text}
      </Button>
    )
  }

  return (
    <MaterialLink
      {...props}
      className={className}
      component={external ? "a" : Link}
      href={external ? to : undefined}
      to={external ? undefined : to}
    >
      {children ?? text}
    </MaterialLink>
  );
}

const useStyles = makeStyles({
  textLinks: {
    textTransform: "none",
  },
});