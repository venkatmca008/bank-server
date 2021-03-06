import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillRepository } from 'modules/bill/repositories';
import { CurrencyRepository } from 'modules/currency/repositories';
import { TransactionController } from 'modules/transaction/controllers';
import { TransactionRepository } from 'modules/transaction/repositories';
import { TransactionService } from 'modules/transaction/services';
import { CurrencyModule } from 'modules/currency/currency.module';
import { BillModule } from 'modules/bill/bill.module';
import { UserModule } from 'modules/user/user.module';
import { LanguageModule } from 'modules/language/language.module';

@Module({
  imports: [
    LanguageModule,
    forwardRef(() => UserModule),
    forwardRef(() => CurrencyModule),
    forwardRef(() => BillModule),
    TypeOrmModule.forFeature([
      TransactionRepository,
      BillRepository,
      CurrencyRepository,
    ]),
  ],
  controllers: [TransactionController],
  exports: [TransactionService],
  providers: [TransactionService],
})
export class TransactionModule {}
