import { faker } from '@faker-js/faker/locale/en'

// This file exports functions that create random moview and song name

export const createRandomMovie = () => {
    return `${faker.word.adjective()} ${faker.word.noun()}`
}

export const createRandomSong = () => {
    return faker.music.songName()
}