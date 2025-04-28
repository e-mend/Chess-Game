<template>
    <q-select
        v-model="locale"
        :options="supportedLanguages"
        @update:model-value="changeLang"
        bg-color="white"
        filled
        borderless
    >
        <template v-slot:prepend>
            <q-icon name="language" />
        </template>
    </q-select>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import type { MessageLanguages } from 'src/boot/i18n';
import Languages from 'src/i18n';
import { Cookies } from 'quasar'

const { locale } = useI18n();
const supportedLanguages = Object.keys(Languages) as MessageLanguages[];

function changeLang(lang: MessageLanguages): void
{
    locale.value = lang;
    Cookies.set('lang', lang, {
        secure: true,
        expires: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 7)
    })
}
</script>