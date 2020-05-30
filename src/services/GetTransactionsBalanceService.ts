import { getCustomRepository } from 'typeorm';
import Transaction from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface Result {
  transactions: Transaction[];
  balance: Balance;
}

class GetTransactionsBalanceService {
  public async execute(): Promise<Result> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);
    const transactions = await transactionsRepository.find();
    const balance = await transactionsRepository.getBalance();

    return { transactions, balance };
  }
}

export default GetTransactionsBalanceService;
