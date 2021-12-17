import React from "react";
import { Container, Heading, Text, View } from "@go1d/go1d";
import { IconLinkedIn, IconTwitter, IconYoutube } from "@go1d/go1d/build/components/Icons"
import { Go1Logo } from "../header/logo/go1-logo";
import { THEME_COLOR_BACKGROUND } from "../../constants/theme.constant";
import { footerOptions } from "../../../in/utils/footer-urls";


export function Footer() {
  return (
    <View element="footer">
      <View paddingY={ 6 } paddingX={ [4, 5, 6] } backgroundColor="successLow">
        <Container contain="wide">
          <View paddingTop={ [5, 6] } flexDirection={ ["column", "column", "row"] }>
            <Go1Logo size={ 9 } theme={ THEME_COLOR_BACKGROUND } marginRight="80" display={ ["none", "flex"] }/>
            <View flexDirection="row" flexWrap="wrap" flexGrow={ 1 } paddingTop={ 4 }>
              {
                footerOptions.map((footerOption, indexFooter) => (
                  <View key={ indexFooter }
                        css={ { gap: "1rem" } }
                        width={ [1 / 2, 1 / 3] }
                        marginBottom={ 6 }
                        flexShrink={ 1 }>
                    <Heading semanticElement="div"
                             visualHeadingLevel="Heading 5"
                             color="dangerMid">
                      {
                        !!footerOption.href ?
                          (<a href={ footerOption.href }>{ footerOption.title }</a>) : footerOption.title
                      }
                    </Heading>
                    <View css={ { gap: "0.5rem" } }>
                      {
                        footerOption.options.map((option, indexOption) => (
                          <Text key={ indexOption }
                                element="a"
                                color="background"
                                href={ option.href }>
                            { option.title }
                          </Text>
                        ))
                      }
                    </View>
                  </View>
                ))
              }
            </View>
          </View>
        </Container>
      </View>
      <View paddingY={ 6 } paddingX={ [4, 5, 6] } backgroundColor="successLowest">
        <Container contain="wide">
          <View marginBottom={ 3 } display="flex" flexDirection="row" justifyContent="space-between">
            <View display="flex" flexDirection="row">
              <Text color="background" element="a" href="https://www.go1.com/en-au/terms/privacy-policy">
                Privacy
              </Text>
              <Text color="background" paddingX={ 4 }> ･</Text>
              <Text color="background" element="a" href="https://www.go1.com/en-au/terms/user-terms">
                Legal
              </Text>
            </View>
            <View display="flex" flexDirection="row" marginLeft="auto">
              <Text element="a" href="tel:1300552914" color="background" marginRight={ 4 }>1300 552 914</Text>
              <IconTwitter href="https://twitter.com/go1com" marginRight={ 4 } size={ 4 } color="background"/>
              <IconYoutube href="https://www.youtube.com/channel/UCL0rzER3FHXQMjAziF31wgA" marginRight={ 4 }
                           size={ 4 }
                           color="background"/>
              <IconLinkedIn href="https://www.linkedin.com/company/go1/" marginRight={ 4 } size={ 4 }
                            color="background"/>
            </View>
          </View>
          <View element="hr" borderBottom={ 1 } borderColor="delicate"/>
          <View>
            <Text color="background" marginTop={ 3 }>
              © Copyright 2021
              <Text paddingX={ [3, 4] } color="background"> ･ </Text>
              All Rights Reserved
            </Text>
          </View>
        </Container>
      </View>
    </View>
  )
}
