<template>
    <v-card color="grey lighten-4" flat height="4em" tile>
        <v-toolbar color="blue">
            <v-btn icon color="white" large href="/">
                <v-icon> mdi-home</v-icon>
            </v-btn>

            <v-toolbar-title>Math-Scrabble</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
                    icon
                    color="white"
                    large
                    href=""
            >
                <v-icon>mdi-github</v-icon>
            </v-btn>

            <v-btn
                    icon
                    color="white"
                    large
                    href=""
            >
                <v-icon>mdi-account</v-icon>
            </v-btn>

            <v-btn
                    icon
                    color="white"
                    large
                    href=""
            >
                <v-icon>mdi-bug</v-icon>
            </v-btn>
        </v-toolbar>
    </v-card>
</template>

<script>
    export default {
        name: 'navbar',

        data: () => ({}),
    }
</script>