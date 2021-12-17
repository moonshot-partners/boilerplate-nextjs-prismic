import React from 'react';
import { Prose, Theme } from '@go1d/go1d';
import { spacing, type } from '@go1d/go1d/build/foundations';

const StyledProse = ({
  html,
  color = 'subtle',
  fontSize = 2,
  css,
  ...props
}) => (
  <Theme.Consumer>
    {({ breakpoints, colors }) => (
      <Prose
        color={color}
        HTML={html}
        fontSize={fontSize}
        css={{
          whiteSpace: 'initial',
          '*': {
            whiteSpace: 'initial',
          },
          '> * + *': {
            marginTop: '1.125em',
          },
          a: {
            color: colors.accent,
          },
          img: {
            borderRadius: spacing[4],
          },
          iframe: {
            height: 0,
            paddingTop: '62.5%',
          },
          'a:hover': {
            color: colors.default,
            textDecoration: 'underline',
            textDecorationColor: 'currentColor',
            textUnderlinePosition: 'under',
          },
          'a:active': {
            color: colors.default,
            textDecoration: 'underline',
            textDecorationColor: colors.default,
            textUnderlinePosition: 'under',
          },
          em: {
            color: '#35626D',
            fontStyle: 'italic',
          },
          'h2, h5': {
            color: 'currentColor',
            fontWeight: type.weight.bold,
            lineHeight: type.leading.display,
            fontFamily: type.family?.display,
            marginBottom: spacing[4],
          },
          h2: {
            marginTop: spacing[7],
            fontSize: type.scale.sm[7],
            [breakpoints.md]: {
              fontSize: type.scale.md[7],
            },
            [breakpoints.lg]: {
              fontSize: type.scale.lg[7],
            },
          },
          'h3, h4': {
            color: 'currentColor',
            fontWeight: type.weight.bold,
            lineHeight: type.leading.display,
            fontFamily: type.family?.sansSerif,
            marginBottom: spacing[4],
          },
          h3: {
            fontSize: type.scale.sm[4],
            [breakpoints.md]: {
              fontSize: type.scale.md[4],
            },
            [breakpoints.lg]: {
              fontSize: type.scale.lg[4],
            },
          },
          h4: {
            fontSize: type.scale.sm[3],
            [breakpoints.md]: {
              fontSize: type.scale.md[3],
            },
            [breakpoints.lg]: {
              fontSize: type.scale.lg[3],
            },
          },
          h5: {
            fontSize: type.scale.sm[5],
          },
          h6: {
            fontSize: type.scale.lg[3],
            marginBottom: spacing[4],
          },
          pre: {
            display: 'block',
            color: colors.default,
            fontFamily: type.family.mono,
            whiteSpace: 'pre',
            margin: '1em 0',
            backgroundColor: colors.soft,
          },
          p: {
            display: 'block',
            color: colors[color],
          },
          'p:empty': {
            display: 'none',
          },
          strong: {
            fontWeight: '700',
          },
          ul: {
            display: 'block',
            listStyle: 'disc outside none',
            margin: `${spacing[4]}px 0`,
            padding: `0 0 0 ${spacing[5]}px`,
            ul: {
              listStyle: 'circle outside none',
              marginLeft: spacing[4],
            },
            ol: {
              listStyle: 'lower-latin outside none',
              marginLeft: spacing[4],
            },
          },
          li: {
            display: 'list-item',
            padding: `${spacing[2]}px 0`,
          },
          ol: {
            display: 'block',
            listStyle: 'decimal outside none',
            margin: `${spacing[4]}px 0`,
            padding: `0 0 0 ${spacing[5]}px`,
            ul: {
              listStyle: 'circle outside none',
              marginLeft: spacing[4],
            },
            ol: {
              listStyle: 'lower-latin outside none',
              marginLeft: spacing[4],
            },
          },
          ...css,
        }}
        {...props}
      />
    )}
  </Theme.Consumer>
);

export default StyledProse;
