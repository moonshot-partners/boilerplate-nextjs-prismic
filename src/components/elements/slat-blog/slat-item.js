import React from "react";
import { View, Text, Card } from "@go1d/go1d";

export function SlatItem( blogs ) {
  const blog = blogs.attributes;

  return (
    <View flexDirection="row">
      <Card src={ blog.image.value } 
            width="120"
            alt={ blog.title.value } 
            thumbnail={ blog.image.value } 
            css={{ padding: "0" }}
            />
        <View paddingLeft={ 5 } width={["199", "380"]}>
          <Text color="subtle" textTransform="capitalize" fontSize={ 2 }>
          { `${ blogs.type } ･ ${ blogs.tags[0] }` }
          </Text>
          <Text color="contrast" fontSize={ 3 } fontWeight="semibold" paddingY={ 3 }>
            { blog.title.value }
          </Text>
      </View>
    </View>
  )
}
