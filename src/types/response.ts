type AccountType = {
  name: string
  category: string
  icon: string
}

export type AccountResponseData = {
  amount: number
  id: number
  monthName: string
  name: string
  type: AccountType
}

export type RecordsResponseData = {
  amount: number
  category: string
  description: string | null
  id: number
  month: string
  month_id: number | null
  'record-type': 'income' | 'expense' | null
}
