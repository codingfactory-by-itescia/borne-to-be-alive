import { Test, TestingModule } from '@nestjs/testing';
import { TicketSatatusValidationPipe } from './ticket-satatus-validation-pipe';

describe('TicketSatatusValidationPipe', () => {
  let provider: TicketSatatusValidationPipe;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TicketSatatusValidationPipe],
    }).compile();

    provider = module.get<TicketSatatusValidationPipe>(TicketSatatusValidationPipe);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
