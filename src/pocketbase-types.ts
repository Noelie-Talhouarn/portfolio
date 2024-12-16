/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Cards = "cards",
	Projets = "projets",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type CardsRecord = {
	categorie?: string
	description_projet?: string
	domaines1?: string
	domaines2?: string
	domaines3?: string
	img?: string
	projet?: RecordIdString
	titre?: string
}

export type ProjetsRecord = {
	categorie?: string
	charte_graphique?: string[]
	conclusion?: string
	date?: number
	description1?: string
	description3?: string
	description_projet?: string
	domaine1?: string
	domaine2?: string
	domaine3?: string
	galerie?: string[]
	img?: string
	outils?: string[]
	projet?: RecordIdString
	resume?: string
	sous_titre1?: string
	sous_titre2?: string
	sous_titre3?: string
	sous_titre4?: string
	sous_titre5?: string
	titre?: string
	url?: string
}

export type UsersRecord = {
	avatar?: string
	name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type CardsResponse<Texpand = unknown> = Required<CardsRecord> & BaseSystemFields<Texpand>
export type ProjetsResponse<Texpand = unknown> = Required<ProjetsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	cards: CardsRecord
	projets: ProjetsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	cards: CardsResponse
	projets: ProjetsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'cards'): RecordService<CardsResponse>
	collection(idOrName: 'projets'): RecordService<ProjetsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
